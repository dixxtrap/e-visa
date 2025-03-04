import { useState } from "react";

export const handlePreviewV2 = ({ previewImage }: { previewImage?: string }) => {
    const [file, setFile] = useState<File>();
    const [preview, setPreview] = useState<string | undefined>(
      previewImage
    );
    const handlerFile = (event: any) => {
      const file = event.target.files && event.target.files[0];
      console.log("------------------handleImga------------------", file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
          console.log(
            "--------------------file------------------",
            previewImage
          );
        };
        reader.readAsDataURL(file);
        setFile!(file);
      } else {
        setPreview(undefined);
      }
    };
    return { handlerFile, setPreview, preview, file };
  };
