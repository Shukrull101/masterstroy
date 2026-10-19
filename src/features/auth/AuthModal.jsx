import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { authApi } from "@/entities/user/api/authApi.js";
import { useUser } from "@/entities/user/model/UserContext.js";
import "./auth.css";

const EMPTY = { name: "", email: "", password: "" };

export default function AuthModal({ open, mode, onMode, onClose }) {
  const { setSession } = useUser();
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isRegister = mode === "register";

  useEffect(() => {
    if (!open) return;
    setForm(EMPTY);
    setError("");
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, mode, onClose]);

  if (!open) return null;
  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { user, token } = isRegister
        ? await authApi.register(form)
        : await authApi.login(form);
      setSession(user, token);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          <X size={20} />
        </button>
        <div className="auth-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={!isRegister}
            className={!isRegister ? "active" : ""}
            onClick={() => onMode("login")}
          >
            Вход
          </button>
          <button
            role="tab"
            aria-selected={isRegister}
            className={isRegister ? "active" : ""}
            onClick={() => onMode("register")}
          >
            Регистрация
          </button>
        </div>
        <h2 id="auth-title">
          {isRegister ? "Создайте аккаунт" : "С возвращением"}
        </h2>
        <p className="modal-sub">
          {isRegister
            ? "Сохраним ваши данные, чтобы заявки оформлялись быстрее."
            : "Войдите, чтобы быстрее оформлять заявки."}
        </p>
        <form onSubmit={submit} className="callback-form">
          {isRegister && (
            <label>
              Имя
              <input
                required
                minLength="2"
                value={form.name}
                onChange={set("name")}
                placeholder="Как к вам обращаться?"
                autoComplete="name"
              />
            </label>
          )}
          <label>
            Email
            <input
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="name@example.com"
              autoComplete="email"
            />
          </label>
          <label>
            Пароль
            <input
              required
              type="password"
              minLength="6"
              value={form.password}
              onChange={set("password")}
              placeholder="Не менее 6 символов"
              autoComplete={isRegister ? "new-password" : "current-password"}
            />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button className="btn btn-full" type="submit" disabled={loading}>
            {loading
              ? "Подождите…"
              : isRegister
                ? "Зарегистрироваться"
                : "Войти"}{" "}
            {!loading && <ArrowRight size={17} />}
          </button>
        </form>
      </div>
    </div>
  );
}
