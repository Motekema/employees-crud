import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TK | Full-Stack Developer
        </p>
        <p className="text-xs mt-1">
          📍 South Africa | 📧{" "}
          <a href="mailto:motekemas@gmail.com" className="underline">
            motekema@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
