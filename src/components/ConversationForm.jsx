import React from "react";

const ConversationForm = ({
  variant = "light",
  eyebrow = "LET'S GROW YOUR BRAND ONLINE",
  title = "Start A Conversation",
  fields = [],
  values = {},
  onChange,
  onSubmit,
  submitLabel = "Submit",
  className = "",
}) => {
  const isFooter = variant === "footer";

  const containerClassName = isFooter ? "" : "";

  const eyebrowClassName = isFooter
    ? "text-[#4b4b4b]"
    : "text-[#000000]";

  const titleClassName = isFooter
    ? "text-[#1b1b1b]"
    : "text-[#000000]";

  const inputClassName = isFooter
    ? "w-full px-3 sm:px-4 py-3 border border-white/40 rounded-lg text-sm text-white placeholder-white/60 bg-transparent focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white"
    : "w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#8A72EB]";

  const buttonClassName = isFooter
    ? "block w-fit mx-auto bg-[#2F46FF] text-white px-8 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#2638cc] transition-colors"
    : "w-full !bg-[#6364FF] !text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#7a64d6] transition-colors";

  return (
    <div className={[containerClassName, className].filter(Boolean).join(" ")}>
      <div className="mb-6 sm:mb-8 text-center">
        <p
          className={`font-medium text-[16px] sm:text-[18px] lg:text-[19.78px] tracking-wide ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
        <h3
          className={`text-xl sm:text-2xl lg:text-3xl font-medium mt-2 ${titleClassName}`}
        >
          {title}
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
        {fields.map((field) => {
          const isTextarea =
            field.type === "textarea" || field.as === "textarea";
          const value = values[field.name] ?? "";
          const commonProps = {
            name: field.name,
            placeholder: field.placeholder,
            value,
            onChange,
            required: field.required,
            className: inputClassName,
          };

          if (isTextarea) {
            return (
              <textarea
                key={field.name}
                rows={field.rows || 4}
                {...commonProps}
                className={`${inputClassName} resize-none`}
              />
            );
          }

          return (
            <input
              key={field.name}
              type={field.type || "text"}
              {...commonProps}
            />
          );
        })}

        <button type="submit" className={buttonClassName}>
          {submitLabel}
        </button>
      </form>
    </div>
  );
};

export default ConversationForm;
