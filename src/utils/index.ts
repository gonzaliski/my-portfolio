export function transformAboutMeData(assets: [any], items: [any]) {
  const newItems = items.filter(
    (j: any) => j.sys.contentType.sys.id == "aboutMeItem"
  );
  let simplifiedItems = newItems.map((i) => {
    return {
      title: i.fields.title,
      description: i.fields.description,
      order: i.fields.order,
      imgUrl:
        assets.find((asset) => {
          return asset.sys.id == i.fields.image.sys.id;
        })?.fields.file.url || "",
    };
  });
  return simplifiedItems.sort((a, b) => a.order - b.order);
}
