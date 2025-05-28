import React, { Fragment, useState } from "react";
import { CiChat2 } from "react-icons/ci";
import { IoMdChatbubbles } from "react-icons/io";

export default function MyWidget() {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div>
        {show && (
          <div
            style={{
              position: "fixed",
              bottom: "calc(6rem + 1.5rem)",
              zIndex: 20,
              right: 0,
              marginRight: "1rem",
              backgroundColor: "#ffffff",
              padding: "1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb",
              width: "440px",
              height: "634px",
              boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Heading */}
            <div style={{ display: "flex", flexDirection: "column", rowGap: "0.375rem", paddingBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: "600", fontSize: "1.125rem", letterSpacing: "-0.015em" }}>Chatbot</h2>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: "0.75rem" }}>
                Powered by Mendable and Vercel
              </p>
            </div>

            {/* Chat Container */}
            <div style={{ paddingRight: "1rem", height: "474px", minWidth: "100%", display: "table" }}>
              {/* AI Message */}
              <div style={{ display: "flex", gap: "0.75rem", margin: "1rem 0", color: "#4b5563", fontSize: "0.875rem", flex: 1 }}>
                <span style={{ position: "relative", flexShrink: 0, overflow: "hidden", borderRadius: "9999px", width: "2rem", height: "2rem" }}>
                  <div style={{ borderRadius: "9999px", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb", padding: "0.25rem" }}>
                    <svg fill="black" height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5...z"></path>
                    </svg>
                  </div>
                </span>
                <p style={{ lineHeight: "1.5" }}>
                  <span style={{ display: "block", fontWeight: "bold", color: "#374151" }}>AI</span>
                  Hi, how can I help you today?
                </p>
              </div>

              {/* User Message */}
              <div style={{ display: "flex", gap: "0.75rem", margin: "1rem 0", color: "#4b5563", fontSize: "0.875rem", flex: 1 }}>
                <span style={{ position: "relative", flexShrink: 0, overflow: "hidden", borderRadius: "9999px", width: "2rem", height: "2rem" }}>
                  <div style={{ borderRadius: "9999px", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb", padding: "0.25rem" }}>
                    <svg fill="black" height={20} width={20} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8a3 3 0...Z" />
                    </svg>
                  </div>
                </span>
                <p style={{ lineHeight: "1.5" }}>
                  <span style={{ display: "block", fontWeight: "bold", color: "#374151" }}>You</span>
                  fewafef
                </p>
              </div>

              {/* AI Follow-up Message */}
              <div style={{ display: "flex", gap: "0.75rem", margin: "1rem 0", color: "#4b5563", fontSize: "0.875rem", flex: 1 }}>
                <span style={{ position: "relative", flexShrink: 0, overflow: "hidden", borderRadius: "9999px", width: "2rem", height: "2rem" }}>
                  <div style={{ borderRadius: "9999px", backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb", padding: "0.25rem" }}>
                    <svg fill="black" height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.813 15.904L9 18.75...z" />
                    </svg>
                  </div>
                </span>
                <p style={{ lineHeight: "1.5" }}>
                  <span style={{ display: "block", fontWeight: "bold", color: "#374151" }}>AI</span>
                  Sorry, I couldn&apos;t find any information in the documentation about that...
                </p>
              </div>
            </div>

            {/* Input */}
            <div style={{ display: "flex", alignItems: "center", paddingTop: 0 }}>
              <form style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", gap: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="Type your message"
                  defaultValue=""
                  style={{
                    flex: 1,
                    height: "2.5rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #e5e7eb",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    color: "#030712",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#f9fafb",
                    backgroundColor: "#000000",
                    height: "2.5rem",
                    padding: "0 1rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShow((e) => !e)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 100000,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "4rem",
          height: "4rem",
          borderRadius: "9999px",
          backgroundColor: "#000",
          border: "1px solid #e5e7eb",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
        aria-haspopup="dialog"
        aria-expanded={show}
      >
        {show ? <IoMdChatbubbles size={20} /> : <CiChat2 size={20} />}
      </button>
    </Fragment>
  );
}
