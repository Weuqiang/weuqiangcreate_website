import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

function BlogSidebarDesktop({sidebar}) {
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <a
                className={clsx(styles.sidebarItemLink, {
                  [styles.sidebarItemLinkActive]: item.isCurrent,
                })}
                href={item.permalink}>
                {item.title}
              </a>
              {item.date && (
                <div className={styles.sidebarItemDate}>
                  {new Date(item.date).toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </div>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className={styles.sidebarItemTags}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag.label} className={styles.sidebarItemTag}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function BlogSidebarMobile({sidebar}) {
  return (
    <nav className={styles.sidebarMobile}>
      <div className={styles.sidebarMobileTitle}>{sidebar.title}</div>
      <details className={styles.sidebarMobileDetails}>
        <summary className={styles.sidebarMobileSummary}>
          {translate({
            id: 'theme.blog.sidebar.toggleLabel',
            message: 'Toggle recent posts',
            description: 'The label for the toggle button in mobile blog sidebar',
          })}
        </summary>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <a
                className={clsx(styles.sidebarItemLink, {
                  [styles.sidebarItemLinkActive]: item.isCurrent,
                })}
                href={item.permalink}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}

export default function BlogSidebar({sidebar}) {
  if (sidebar.items.length === 0) {
    return null;
  }
  return (
    <>
      <BlogSidebarDesktop sidebar={sidebar} />
      <BlogSidebarMobile sidebar={sidebar} />
    </>
  );
}