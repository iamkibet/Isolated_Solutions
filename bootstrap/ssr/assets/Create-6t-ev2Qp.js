import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, forwardRef } from "react";
import { A as AdminLayout } from "./AdminLayout-CdjPJ4Wl.js";
import { usePage, router } from "@inertiajs/react";
import { EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { FiType, FiBold, FiItalic, FiList, FiDivide, FiImage } from "react-icons/fi";
import clsx from "clsx";
import { FaQuoteLeft } from "react-icons/fa";
import { P as PrimaryButton } from "./PrimaryButton-C5ts3FGL.js";
import "framer-motion";
const MenuBar = ({ editor, items, onImageUpload }) => {
  const fileInputRef = useRef(null);
  const [headingOpen, setHeadingOpen] = useState(false);
  if (!editor) return null;
  const handleImageClick = () => {
    var _a;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  };
  const handleFileUpload = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      await onImageUpload(file);
      e.target.value = "";
    }
  };
  const toggleHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    setHeadingOpen(false);
  };
  const menuItems = {
    heading: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setHeadingOpen(!headingOpen),
          className: clsx(
            "p-2 hover:bg-gray-100 rounded-md",
            editor.isActive("heading") && "bg-gray-100"
          ),
          "aria-label": "Headings",
          children: /* @__PURE__ */ jsx(FiType, { className: "w-5 h-5" })
        }
      ),
      headingOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg", children: [1, 2, 3].map((level) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => toggleHeading(level),
          className: "block w-full px-4 py-2 text-left hover:bg-gray-50",
          children: [
            "Heading ",
            level
          ]
        },
        level
      )) })
    ] }),
    bold: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleBold().run(),
        disabled: !editor.can().chain().focus().toggleBold().run(),
        className: clsx(
          "p-2 hover:bg-gray-100 rounded-md",
          editor.isActive("bold") && "bg-gray-100"
        ),
        "aria-label": "Bold",
        children: /* @__PURE__ */ jsx(FiBold, { className: "w-5 h-5" })
      }
    ),
    italic: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleItalic().run(),
        disabled: !editor.can().chain().focus().toggleItalic().run(),
        className: clsx(
          "p-2 hover:bg-gray-100 rounded-md",
          editor.isActive("italic") && "bg-gray-100"
        ),
        "aria-label": "Italic",
        children: /* @__PURE__ */ jsx(FiItalic, { className: "w-5 h-5" })
      }
    ),
    bulletList: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        className: clsx(
          "p-2 hover:bg-gray-100 rounded-md",
          editor.isActive("bulletList") && "bg-gray-100"
        ),
        "aria-label": "Bullet list",
        children: /* @__PURE__ */ jsx(FiList, { className: "w-5 h-5" })
      }
    ),
    orderedList: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        className: clsx(
          "p-2 hover:bg-gray-100 rounded-md",
          editor.isActive("orderedList") && "bg-gray-100"
        ),
        "aria-label": "Numbered list",
        children: /* @__PURE__ */ jsx(FiList, { className: "w-5 h-5" })
      }
    ),
    blockquote: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().toggleBlockquote().run(),
        className: clsx(
          "p-2 hover:bg-gray-100 rounded-md",
          editor.isActive("blockquote") && "bg-gray-100"
        ),
        "aria-label": "Blockquote",
        children: /* @__PURE__ */ jsx(FaQuoteLeft, { className: "w-5 h-5" })
      }
    ),
    horizontalRule: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => editor.chain().focus().setHorizontalRule().run(),
        className: "p-2 hover:bg-gray-100 rounded-md",
        "aria-label": "Horizontal rule",
        children: /* @__PURE__ */ jsx(FiDivide, { className: "w-5 h-5" })
      }
    ),
    image: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleImageClick,
          className: "p-2 hover:bg-gray-100 rounded-md",
          "aria-label": "Insert image",
          children: /* @__PURE__ */ jsx(FiImage, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          ref: fileInputRef,
          onChange: handleFileUpload,
          className: "hidden",
          accept: "image/*"
        }
      )
    ] })
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50", children: items.map((item) => {
    const component = menuItems[item];
    return component ? /* @__PURE__ */ jsx("div", { className: "relative", children: component }, item) : null;
  }) });
};
const TiptapEditor = ({
  editor,
  toolbarItems,
  onImageUpload,
  className
}) => {
  const handleImageUpload = async (file) => {
    await onImageUpload(file);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx(
      MenuBar,
      {
        editor,
        items: toolbarItems,
        onImageUpload: handleImageUpload
      }
    ),
    /* @__PURE__ */ jsx(
      EditorContent,
      {
        editor,
        className: `prose max-w-none focus:outline-none ${className}`
      }
    )
  ] });
};
const FormField = forwardRef((props, ref) => {
  const {
    id,
    label,
    value,
    error,
    onValueChange,
    Component = "input",
    required,
    className,
    ...restProps
  } = props;
  const inputClasses = clsx(
    "mt-1 block w-full rounded-md border shadow-sm transition-colors",
    "focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
    "disabled:bg-gray-100 disabled:cursor-not-allowed",
    error ? "border-red-300 text-red-900 placeholder-red-300" : "border-gray-300 placeholder-gray-400",
    className
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-gray-700", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ jsx(
      Component,
      {
        ...restProps,
        ref,
        id,
        value,
        onChange: (e) => onValueChange(e.target.value),
        rows: Component === "textarea" ? props.rows || 3 : void 0,
        className: inputClasses,
        "aria-invalid": !!error,
        "aria-describedby": error ? `${id}-error` : void 0
      }
    ),
    error && /* @__PURE__ */ jsx(
      "p",
      {
        id: `${id}-error`,
        className: "mt-1 text-sm text-red-600",
        role: "alert",
        children: error
      }
    )
  ] });
});
FormField.displayName = "FormField";
const CreatePost = () => {
  const { errors } = usePage().props;
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editor = new Editor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true
      })
    ],
    content,
    onUpdate: ({ editor: editor2 }) => {
      setContent(editor2.getHTML());
    }
  });
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      const { url } = await response.json();
      editor.chain().focus().setImage({ src: url }).run();
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await router.post("/posts", {
        title,
        excerpt,
        content
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(AdminLayout, { title: "Create New Post", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto p-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        label: "Post Title",
        value: title,
        onValueChange: setTitle,
        error: errors.title,
        required: true,
        id: "title"
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        label: "Short Excerpt",
        value: excerpt,
        onValueChange: setExcerpt,
        as: "textarea",
        rows: 3,
        error: errors.excerpt,
        id: "excerpt"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
      TiptapEditor,
      {
        editor,
        toolbarItems: [
          "heading",
          "bold",
          "italic",
          "bulletList",
          "orderedList",
          "blockquote",
          "horizontalRule",
          "image"
        ],
        onImageUpload: handleImageUpload,
        className: "min-h-[400px] p-4"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: isSubmitting, children: "Cancel" }),
      /* @__PURE__ */ jsx(PrimaryButton, { type: "submit", disabled: isSubmitting, children: "Publish Post" })
    ] })
  ] }) }) });
};
export {
  CreatePost as default
};
