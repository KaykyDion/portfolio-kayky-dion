import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 dark:text-zinc-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Kayky Dion. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
