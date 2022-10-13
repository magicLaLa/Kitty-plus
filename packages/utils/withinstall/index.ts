import type { VueConstructor, PluginObject } from 'vue';
export type SFCWithInstall<T> = T & PluginObject<T>;
export default <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: VueConstructor) => {
        //注册组件
        app.component((comp as any).name, comp as SFCWithInstall<T>);
    };
    return comp as SFCWithInstall<T>;
};