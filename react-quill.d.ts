declare module "react-quill" {
  import React from "react";

  export interface ReactQuillProps {
    value: string;
    onChange: (value: string) => void;
    theme?: string;
    modules?: any;
    [key: string]: any;
  }

  const ReactQuill: React.FC<ReactQuillProps>;

  export default ReactQuill;
}
