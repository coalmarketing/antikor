import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type Contact = {
  department: string; // "" => left column
  role: string;
  name: string;
  note: string;
  phone: string;
  email: string;
  order?: number;
};

export type GeneralSettings = {
  title?: string;
  contacts: Contact[];
};

const SETTINGS_PATH = path.join(
  process.cwd(),
  "content",
  "settings",
  "general-settings.md",
);

export async function getGeneralSettings(): Promise<GeneralSettings> {
  const file = await fs.readFile(SETTINGS_PATH, "utf8");
  const { data } = matter(file);

  const contactsRaw = Array.isArray((data as { contacts?: unknown }).contacts)
    ? ((data as { contacts: unknown[] }).contacts as unknown[])
    : [];

  const contacts: Contact[] = contactsRaw.flatMap((c) => {
    if (!c || typeof c !== "object") return [];
    const obj = c as Record<string, unknown>;

    const name = typeof obj.name === "string" ? obj.name : "";
    if (!name) return [];

    const contact: Contact = {
      department: typeof obj.department === "string" ? obj.department : "",
      role: typeof obj.role === "string" ? obj.role : "",
      note: typeof obj.note === "string" ? obj.note : "",
      phone: typeof obj.phone === "string" ? obj.phone : "",
      email: typeof obj.email === "string" ? obj.email : "",
      order: typeof obj.order === "number" ? obj.order : undefined,
      name,
    };

    return [contact];
  });

  return {
    title:
      typeof (data as { title?: unknown }).title === "string"
        ? (data as { title: string }).title
        : undefined,
    contacts,
  };
}
