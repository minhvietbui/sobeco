export function getImage(src, { modifiers, baseURL } = {}, { options, $img }) {
  const { width, height, format, fit, ...providerModifiers } = modifiers;
  const { storage } = useSupabaseClient();
  const fixsrc = src.split('/')[1];

  // process modifiers
  return {
    url: storage.from('images').getPublicUrl(fixsrc).data.publicUrl,
  };
}
