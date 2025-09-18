// app/lib/meta.ts
export type MetaResult = {
  title: string;
  description: string;
  path: string;
  og_title: string;
  og_description: string;
  og_image: string;
  can_index: boolean;
  structured_data?: object;
};

export async function getMeta(path: string): Promise<MetaResult | null> {
  try {
    const res = await fetch(`https://ctrl.apadanacalendar.com/api/meta?path=/${path}`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.success || !data.result) {
      return null;
    }

    return data.result as MetaResult;
  } catch (error) {
    console.error("Failed to fetch meta:", error);
    return null;
  }
}
