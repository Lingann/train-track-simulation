/** 世界UI面板管理器 */
export interface WorldUIManager {
  readonly current: string

  // 传入ui面板名称和四元数
  open: (ui: string) => void
  close: (ui: string) => void
}
