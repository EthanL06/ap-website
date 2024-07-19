// https://github.com/codex-team/editor.js/issues/2731

import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { type EditorConfig } from "@editorjs/editorjs/types/configs";

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Click me to start writing!",
        level: 1,
      },
    },
  ],
};

const useEditor = (config: EditorConfig) => {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const editorInstance = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorInstance.current) {
      editorInstance.current = new EditorJS({
        ...config,
        onReady: () => {
          setIsEditorReady(true);
          config.onReady?.();
        },
        data: DEFAULT_INITIAL_DATA,
      });
    }
    return () => {
      if (editorInstance.current?.destroy) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, [config]);

  return {
    isEditorReady,
    editor: editorInstance.current,
  };
};

export default useEditor;
