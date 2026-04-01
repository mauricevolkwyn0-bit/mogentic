"use client";

import { useState } from "react";
import {
    FD,
    EMPTY,
    CC,
    COUNTRIES,
    BIZ_TYPES,
    SOCIAL_OPTS,
    SPEND_OPTS,
} from "@/lib/constants";

interface FieldProps {
    label: string;
    children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
    return (
        <div className="field">
            <label>{label}</label>
            {children}
        </div>
    );
}

interface ModalProps {
    onClose: () => void;
}

function CountrySelector({ value, onChange }: { value: string, onChange: (v: string) => void }) {
    const [open, setOpen] = useState(false);
    const selected = CC.find(c => c.code === value) || CC[0];

    return (
        <div className="cs-wrap" onMouseLeave={() => setOpen(false)}>
            <button
                type="button"
                className="cs-trigger"
                onClick={() => setOpen(!open)}
            >
                <span className="cs-flag">{selected.svg}</span>
                <span className="cs-code">{selected.code}</span>
                <svg className={`cs-arrow ${open ? 'open' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {open && (
                <div className="cs-options">
                    {CC.map((c) => (
                        <button
                            key={c.code}
                            type="button"
                            className={`cs-option ${c.code === value ? 'active' : ''}`}
                            onClick={() => {
                                onChange(c.code);
                                setOpen(false);
                            }}
                        >
                            <span className="cs-flag">{c.svg}</span>
                            <span className="cs-name">{c.name}</span>
                            <span className="cs-dial">{c.code}</span>
                        </button>
                    ))
                    }
                </div >
            )}
        </div >
    );
}

export default function Modal({ onClose }: ModalProps) {
    const [step, setStep] = useState(0);
    const [exiting, setExiting] = useState(false);
    const [dir, setDir] = useState<1 | -1>(1);
    const [form, setForm] = useState<FD>(EMPTY);

    const set = (k: keyof FD, v: string | string[]) =>
        setForm((p) => ({ ...p, [k]: v }));

    const toggle = (p: string) =>
        set(
            "socialPlatforms",
            form.socialPlatforms.includes(p)
                ? form.socialPlatforms.filter((x) => x !== p)
                : [...form.socialPlatforms, p]
        );

    const TOTAL = 4;

    const canNext = () => {
        if (step === 0)
            return (
                form.firstName &&
                form.lastName &&
                form.email.includes("@") &&
                form.phone &&
                form.country
            );
        if (step === 1) return form.businessName && form.businessType;
        if (step === 2) return form.hasWebsite && form.hasSocial;
        if (step === 3) return form.seoSpend && form.socialSpend;
        return true;
    };

    const navigate = (d: 1 | -1) => {
        setDir(d);
        setExiting(true);
        setTimeout(() => {
            setStep((s) => s + d);
            setExiting(false);
        }, 280);
    };

    const submit = () => {
        console.log("Mogentik application:", form);
        navigate(1);
    };

    return (
        <div
            className="modal-backdrop"
            onClick={(e) => {
                if ((e.target as HTMLElement).classList.contains("modal-backdrop"))
                    onClose();
            }}
        >
            <div className="modal-card">
                <div className="modal-accent-line" />
                <div className="modal-header">
                    <div>
                        {step < TOTAL && (
                            <div className="modal-eyebrow">
                                Step {step + 1} of {TOTAL}
                            </div>
                        )}
                        <div className="modal-title">
                            {step === 0 && "Tell us about yourself"}
                            {step === 1 && "Your business"}
                            {step === 2 && "Your online presence"}
                            {step === 3 && "Your current spend"}
                            {step === 4 && `Welcome, ${form.firstName}!`}
                        </div>
                        <div className="modal-subtitle">
                            {step === 0 &&
                                "We serve businesses in the USA, Australia, UK & New Zealand."}
                            {step === 1 &&
                                "Help us understand what you do so we can tailor your onboarding."}
                            {step === 2 && "Tell us where you currently show up online."}
                            {step === 3 &&
                                "This helps us match you with the right Mogentik plan."}
                            {step === 4 &&
                                "Your application has been received. Our team will reach out within 24 hours."}
                        </div>
                    </div>
                    <button className="modal-x" onClick={onClose}>
                        ✕
                    </button>
                </div>
                {step < TOTAL && (
                    <div className="modal-dots">
                        {Array.from({ length: TOTAL }).map((_, i) => (
                            <div
                                key={i}
                                className={`modal-dot${i === step ? " active" : i < step ? " done" : ""
                                    }`}
                            />
                        ))}
                    </div>
                )}
                {step < TOTAL && (
                    <div className="modal-bar-track">
                        <div
                            className="modal-bar-fill"
                            style={{ width: `${(step / TOTAL) * 100}%` }}
                        />
                    </div>
                )}
                <div
                    className={`modal-body${exiting
                        ? dir === 1
                            ? " exit-left"
                            : " exit-right"
                        : " enter"
                        }`}
                >
                    {step === 0 && (
                        <div className="fields">
                            <div className="field-row">
                                <Field label="First Name *">
                                    <input
                                        value={form.firstName}
                                        onChange={(e) => set("firstName", e.target.value)}
                                        placeholder="John"
                                    />
                                </Field>
                                <Field label="Last Name *">
                                    <input
                                        value={form.lastName}
                                        onChange={(e) => set("lastName", e.target.value)}
                                        placeholder="Smith"
                                    />
                                </Field>
                            </div>
                            <Field label="Email Address *">
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => set("email", e.target.value)}
                                    placeholder="john@company.com"
                                />
                            </Field>
                            <Field label="Contact Number *">
                                <div className="phone-row">
                                    <CountrySelector
                                        value={form.countryCode}
                                        onChange={(v) => set("countryCode", v)}
                                    />
                                    <input
                                        className="phone-num"
                                        value={form.phone}
                                        onChange={(e) => set("phone", e.target.value)}
                                        placeholder="400 000 000"
                                    />
                                </div>
                            </Field>
                            <Field label="Country *">
                                <select
                                    value={form.country}
                                    onChange={(e) => set("country", e.target.value)}
                                >
                                    <option value="">Select your country</option>
                                    {COUNTRIES.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                            </Field>
                        </div>
                    )}
                    {step === 1 && (
                        <div className="fields">
                            <Field label="Business Name *">
                                <input
                                    value={form.businessName}
                                    onChange={(e) => set("businessName", e.target.value)}
                                    placeholder="Acme Co."
                                />
                            </Field>
                            <Field label="Type of Business *">
                                <select
                                    value={form.businessType}
                                    onChange={(e) => set("businessType", e.target.value)}
                                >
                                    <option value="">Select a category</option>
                                    {BIZ_TYPES.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </Field>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="fields">
                            <Field label="Do you have a website? *">
                                <div className="chip-row">
                                    {["Yes", "No", "In Progress"].map((o) => (
                                        <button
                                            key={o}
                                            className={`chip${form.hasWebsite === o ? " on" : ""}`}
                                            onClick={() => set("hasWebsite", o)}
                                        >
                                            {o}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                            {form.hasWebsite === "Yes" && (
                                <Field label="Website URL">
                                    <input
                                        value={form.websiteUrl}
                                        onChange={(e) => set("websiteUrl", e.target.value)}
                                        placeholder="https://yourwebsite.com"
                                    />
                                </Field>
                            )}
                            <Field label="Do you have social media? *">
                                <div className="chip-row">
                                    {["Yes", "No"].map((o) => (
                                        <button
                                            key={o}
                                            className={`chip${form.hasSocial === o ? " on" : ""}`}
                                            onClick={() => set("hasSocial", o)}
                                        >
                                            {o}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                            {form.hasSocial === "Yes" && (
                                <Field label="Which platforms?">
                                    <div className="chip-grid">
                                        {SOCIAL_OPTS.map((p) => (
                                            <button
                                                key={p}
                                                className={`chip${form.socialPlatforms.includes(p) ? " on" : ""
                                                    }`}
                                                onClick={() => toggle(p)}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </Field>
                            )}
                        </div>
                    )}
                    {step === 3 && (
                        <div className="fields">
                            <Field label="Monthly SEO Budget *">
                                <div className="chip-grid">
                                    {SPEND_OPTS.map((o) => (
                                        <button
                                            key={o}
                                            className={`chip${form.seoSpend === o ? " on" : ""}`}
                                            onClick={() => set("seoSpend", o)}
                                        >
                                            {o}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                            <Field label="Monthly Social Media Budget *">
                                <div className="chip-grid">
                                    {SPEND_OPTS.map((o) => (
                                        <button
                                            key={o}
                                            className={`chip${form.socialSpend === o ? " on" : ""}`}
                                            onClick={() => set("socialSpend", o)}
                                        >
                                            {o}
                                        </button>
                                    ))}
                                </div>
                            </Field>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="success-body">
                            <div className="success-icon">✦</div>
                            <p className="success-msg">
                                You are on the founding member list. A member of our team will
                                personally reach out within 24 hours to discuss your tailored
                                Mogentik plan.
                            </p>
                            <div className="success-perks">
                                <div className="perk">— Founding member pricing locked in</div>
                                <div className="perk">— Dedicated account manager</div>
                                <div className="perk">— Priority onboarding</div>
                            </div>
                            <button
                                className="btn-primary"
                                style={{ marginTop: 32 }}
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
                {step < TOTAL && (
                    <div className="modal-footer">
                        {step > 0 ? (
                            <button className="btn-ghost" onClick={() => navigate(-1)}>
                                ← Back
                            </button>
                        ) : (
                            <div />
                        )}
                        {step < TOTAL - 1 ? (
                            <button
                                className="btn-primary"
                                onClick={() => navigate(1)}
                                disabled={!canNext()}
                            >
                                Continue →
                            </button>
                        ) : (
                            <button
                                className="btn-primary"
                                onClick={submit}
                                disabled={!canNext()}
                            >
                                Submit Application →
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
