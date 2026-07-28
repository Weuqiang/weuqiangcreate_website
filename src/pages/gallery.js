import PhotoAlbum from "react-photo-album";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React, { useState, useMemo, createContext, useContext, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import styles from "./gallery.module.css";

const unsplashPhotos = [
  { id: "guofeng-1", width: 1600, height: 1066, title: "国风", description: "青绿山水" },
  { id: "guofeng-2", width: 1545, height: 1219, title: "国风", description: "任熊·拾得图（清）" },
  { id: "guofeng-3", width: 1600, height: 1142, title: "国风", description: "云山千里" },
  { id: "guofeng-4", width: 1600, height: 1066, title: "国风", description: "古刹秋色" },
  { id: "guofeng-5", width: 1600, height: 1066, title: "国风", description: "烟雨楼台" },
  { id: "cosmic-1", width: 1600, height: 775, title: "星空", description: "船底座星云（NASA/Hubble）" },
  { id: "cosmic-2", width: 1600, height: 1600, title: "星空", description: "上帝之眼·螺旋星云" },
  { id: "cosmic-3", width: 1600, height: 1600, title: "星空", description: "创生之柱（NASA/Hubble）" },
  { id: "cosmic-4", width: 1600, height: 1389, title: "星空", description: "深空星系（NASA/JPL）" },
  { id: "cosmic-5", width: 1600, height: 1600, title: "星空", description: "蟹状星云（Hubble）" },
  { id: "nature-1", width: 1600, height: 1067, title: "风景", description: "极光之夜" },
  { id: "nature-2", width: 1600, height: 1066, title: "风景", description: "山涧飞瀑" },
  { id: "nature-3", width: 1600, height: 724, title: "风景", description: "湖岸极光" },
  { id: "nature-4", width: 1600, height: 1064, title: "风景", description: "秋林光影" },
  { id: "nature-5", width: 1600, height: 1015, title: "风景", description: "银河夜空" },
];

const uniqueTitlesSet = new Set(unsplashPhotos.map((photo) => photo.title)).add("全选");
const extractedData = Array.from(uniqueTitlesSet).map((title) => ({
  value: title || "其他",
  title: title || "其他",
}));

export const SettingsContext = createContext(null);
export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within a SettingsContext");
  return context;
}

function Settings({ children }) {
  const [layout, setLayout] = useState("columns");
  const [count, setCount] = useState(unsplashPhotos.length);
  const [targetRowHeight, setTargetRowHeight] = useState(200);
  const [columns, setColumns] = useState(5);
  const [spacing, setSpacing] = useState(30);
  const [padding, setPadding] = useState(30);
  const [width, setWidth] = useState(95);
  const [tag, settag] = useState("全选");

  useEffect(() => {
    const viewportSize = window.innerWidth;
    setColumns(viewportSize < 480 ? 2 : viewportSize < 900 ? 3 : 5);
    setSpacing(viewportSize < 480 ? 5 : viewportSize < 900 ? 10 : 20);
    setPadding(viewportSize < 480 ? 5 : viewportSize < 900 ? 10 : 20);
    setTargetRowHeight(viewportSize < 480 ? 100 : viewportSize < 900 ? 150 : 200);
  }, []);

  const settings = useMemo(() => ({
    rawPhotos:
      tag === "其他"
        ? unsplashPhotos.filter((p) => p.title === undefined || p.title === null).slice(0, count)
        : tag === "全选"
          ? unsplashPhotos.slice(0, count)
          : unsplashPhotos.filter((p) => p.title === tag).slice(0, count),
    layout, targetRowHeight, columns, spacing, padding, width,
  }), [layout, count, targetRowHeight, columns, spacing, padding, width, tag]);

  return (
    <SettingsContext.Provider value={settings}>
      <div className={styles.panel}>
        <div className={styles.filterRow}>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel} htmlFor="layout-select">布局</label>
            <select id="layout-select" className={styles.select} value={layout}
              onChange={(event) => setLayout(event.target.value)}>
              {[{ value: "rows", title: "按行" }, { value: "columns", title: "按列" }, { value: "masonry", title: "动态" }].map(({ value, title }) => (
                <option key={value} value={value}>{title}</option>
              ))}
            </select>
          </div>
          <div className={styles.filterItem}>
            <label className={styles.filterLabel} htmlFor="tag-select">主题</label>
            <select id="tag-select" className={styles.select} value={tag}
              onChange={(event) => settag(event.target.value)}>
              {extractedData.map(({ value, title }) => (
                <option key={value} value={value}>{title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {children}
    </SettingsContext.Provider>
  );
}

function Playground() {
  const { rawPhotos, layout, columns, targetRowHeight, spacing, padding, width } = useSettings();
  const [index, setIndex] = useState(-1);
  // 用 useBaseUrl 拼 baseUrl 前缀，production 下图片指向 /weuqiangcreate_website/pages/gallery/...
  const baseUrl = useBaseUrl("/");
  const photos = useMemo(
    () => rawPhotos.map((photo) => ({
      src: `${baseUrl}pages/gallery/${photo.id}-${photo.width}-${photo.height}.webp`,
      width: photo.width,
      height: photo.height,
      title: photo.title,
      description: (photo.description || "") + `\n${photo.width} x ${photo.height}`,
    })),
    [rawPhotos, baseUrl]
  );

  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, ...rest } }) => (
      <img alt={alt} style={{
        ...style,
        borderRadius: padding > 2 ? "4px" : 0,
        boxShadow: spacing > 0
          ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
          : "none",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }} {...rest} />
    ),
    [spacing, padding]
  );

  return (
    <div className={styles.albumWrap} style={{ width: `${width}%` }}>
      <PhotoAlbum
        photos={photos}
        layout={layout}
        columns={columns}
        spacing={spacing}
        padding={padding}
        targetRowHeight={targetRowHeight}
        renderPhoto={renderPhoto}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
      />
    </div>
  );
}

function GalleryContent() {
  return (
    <>
      <header className={styles.pageHeader}>
        <span className={styles.pageEyebrow}>影像</span>
        <h1 className={styles.pageTitle}>相册</h1>
        <p className={styles.pageLead}>
          一组从全网搜集的真实壁纸——国风（中国画/古风摄影）、星空（Hubble 星云）、风景（极光/银河/山林），均来自 Wikimedia Commons 的自由授权图库（公共领域 / CC BY / CC BY-SA）。按主题筛选，按行/按列/动态三种布局切换，点击放大全屏欣赏。
        </p>
      </header>
      <Settings>
        <Playground />
      </Settings>
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <GalleryContent />
    </Layout>
  );
}