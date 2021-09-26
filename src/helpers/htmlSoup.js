import JSSoup from "jssoup";

export async function htmlSoup(html) {
  return await new JSSoup(html);
}
