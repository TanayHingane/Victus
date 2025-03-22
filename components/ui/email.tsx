import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export function Email() {
  const customCommandMap = {
    npm: "tanayhingane03@gmail.com",
    // yarn: "yarn shadcn add button",
    // pnpm: "pnpm dlx shadcn@latest add button",
    // bun: "bun x shadcn@latest add button",
  };
  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={false}
      codeLanguage="shell"
      lightTheme="nord"
      darkTheme="vitesse-dark"
      commandMap={customCommandMap}
    />
  );
}
