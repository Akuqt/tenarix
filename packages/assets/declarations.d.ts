declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const content: string;
  export default content;
}
