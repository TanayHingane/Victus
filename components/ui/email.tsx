import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";

export function Email() {
  const customCommandMap = {
    npm: "tanayhingane03@gmail.com",
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
