"use client";
import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";
import { safeGetJSON, safeSetItem, safeSetJSON, STORAGE_KEYS } from "@/lib/localStorage";

type SubscribeModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type PrelaunchEntry = {
  email: string;
  date: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SubscribeModal({ open, onClose, onSuccess }: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setEmail("");
      setError(null);
      setDone(false);
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Digite um e-mail válido.");
      return;
    }
    const current = safeGetJSON<PrelaunchEntry[]>(STORAGE_KEYS.prelaunchEmails, []);
    const exists = current.some((e) => e.email.toLowerCase() === value.toLowerCase());
    const next = exists
      ? current
      : [...current, { email: value, date: new Date().toISOString() }];
    safeSetJSON(STORAGE_KEYS.prelaunchEmails, next);
    safeSetItem(STORAGE_KEYS.subscribed, "true");
    setError(null);
    setDone(true);
    onSuccess();
  }

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-title"
        aria-describedby="subscribe-desc"
        className="modal"
      >
        <header className="flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow">{"// PRÉ-LANÇAMENTO"}</span>
            <h2
              id="subscribe-title"
              className="mt-2 font-sans text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-[color:var(--color-text)] lg:text-[26px]"
            >
              Seja avisado na abertura
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[10px] border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-primary)] hover:border-[color:var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-primary)] focus-visible:outline-offset-2"
          >
            <X aria-hidden className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </header>

        <p
          id="subscribe-desc"
          className="mt-4 font-sans text-[14px] leading-[1.5] text-[color:var(--color-text-muted)]"
        >
          Deixe seu e-mail para receber o convite quando a Kenvix abrir oficialmente.
          Sem spam — apenas o aviso de lançamento.
        </p>

        {done ? (
          <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] p-4">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Check className="h-4 w-4 text-[color:var(--color-text-inverse)]" strokeWidth={2} />
            </span>
            <div>
              <p
                role="status"
                aria-live="polite"
                className="font-sans text-[14px] font-semibold text-[color:var(--color-text)]"
              >
                E-mail registrado com sucesso.
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.04em] text-[color:var(--color-text-muted)]">
                STATUS · PRE-LAUNCH QUEUE OK
              </p>
            </div>
          </div>
        ) : (
          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="subscribe-email"
                className="font-sans text-[12px] font-semibold uppercase tracking-[0.04em] text-[color:var(--color-text)]"
              >
                E-mail
              </label>
              <input
                ref={inputRef}
                id="subscribe-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="seu@email.com"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "subscribe-error" : "subscribe-hint"}
                className="input"
              />
              <p id="subscribe-hint" className="font-mono text-[11px] text-[color:var(--color-text-muted)]">
                Nunca compartilharemos seu e-mail
              </p>
            </div>
            {error && (
              <p
                id="subscribe-error"
                role="alert"
                className="font-sans text-[12px] text-[color:var(--color-danger)]"
              >
                {error}
              </p>
            )}
            <button type="submit" className="btn-primary mt-2 w-full">
              Registrar meu e-mail
            </button>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.04em] text-[color:var(--color-text-muted)]">
              Dados armazenados apenas no seu navegador.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
