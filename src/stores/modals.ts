/* eslint-disable */
import { create } from "zustand";

export interface GlobalModalState {
  showReportModal: boolean;
  reportingPublication: any | null;
  reportConfig: any;
  setShowReportModal: (
    showReportModal: boolean,
    reportingPublication: any | null,
    reportConfig?: any
  ) => void;
  showStatusModal: boolean;
  setShowStatusModal: (showStatusModal: boolean) => void;
  showProfileSwitchModal: boolean;
  setShowProfileSwitchModal: (showProfileSwitchModal: boolean) => void;
  showMobileDrawer: boolean;
  setShowMobileDrawer: (showMobileDrawer: boolean) => void;
  showMobileMenu: boolean;
  setShowMobileMenu: (showMobileMenu: boolean) => void;
  isLoadingPage: boolean;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
}

export const useGlobalModalStateStore = create<GlobalModalState>((set) => ({
  showReportModal: false,
  reportingPublication: null,
  reportConfig: null,
  setShowReportModal: (showReportModal, reportingPublication, reportConfig) =>
    set(() => ({ showReportModal, reportingPublication, reportConfig })),
  showStatusModal: false,
  setShowStatusModal: (showStatusModal) => set(() => ({ showStatusModal })),
  showProfileSwitchModal: false,
  setShowProfileSwitchModal: (showProfileSwitchModal) =>
    set(() => ({ showProfileSwitchModal })),
  showMobileDrawer: false,
  setShowMobileDrawer: (showMobileDrawer) => set(() => ({ showMobileDrawer })),
  showMobileMenu: false,
  setShowMobileMenu: (showMobileMenu) => set(() => ({ showMobileMenu })),
  isLoadingPage: true,
  setIsLoadingPage: (isLoadingPage) => set(() => ({ isLoadingPage })),
}));
