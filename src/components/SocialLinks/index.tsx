import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
      <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} className="text-gray-600 dark:text-white" />
      </a>
      <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} className="text-gray-600 dark:text-white" />
      </a>
    </div>
  );
}
