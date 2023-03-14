export function transformAboutMeData(assets: any[], items: any[]) {
  const newItems = filterByContent(items, "aboutMeItem");
  let simplifiedItems = newItems.map((i) => {
    return {
      title: i.fields.title,
      description: i.fields.description,
      order: i.fields.order,
      imgUrl: findAsset(assets, i.fields.image.sys.id),
    };
  });
  return orderResultAsc(simplifiedItems);
}
export function transformProjectData(assets: any[], items: any[]) {
  const newItems = filterByContent(items, "portfolioProyects");
  let simplifiedItems = newItems.map((i) => {
    return {
      title: i.fields.title,
      description: i.fields.description,
      technologies: i.fields.technologies.split(","),
      projectUrl: i.fields.projectUrl,
      projectRepo: i.fields.projectRepo,
      order: i.fields.order,
      imgUrl: findAsset(assets, i.fields.projectPreview.sys.id),
    };
  });
  console.log(simplifiedItems);

  return orderResultAsc(simplifiedItems);
}

function filterByContent(items: any[], contentType: string) {
  return items.filter((j: any) => j.sys.contentType.sys.id == contentType);
}

function findAsset(assets: any[], imageId: string) {
  return (
    assets.find((asset) => {
      return asset.sys.id == imageId;
    })?.fields.file.url || ""
  );
}
function orderResultAsc(items: any[]) {
  return items.sort((a, b) => a.order - b.order);
}
