import {create} from 'zustand'

type useModalStoreProps = {
    visibleRWA: boolean;
    toggleVisibleRWA: () => void
    visibleBorrow: boolean;
    toggleVisibleBorrow: () => void
    visibleTBA: boolean;
    toggleVisibleTBA: () => void
    visibleBank: boolean;
    toggleVisibleBank: () => void
    visibleBankTba: boolean;
    toggleVisibleBankTba: () => void
    visibleSuccess: boolean;
    toggleVisibleSuccess: () => void
    visibleTransfer: boolean;
    toggleVisibleTranfer: () => void
}

const useModalStore = create<useModalStoreProps>((set) => ({
    visibleRWA: false,
    visibleBorrow: false,
    visibleTBA: false,
    visibleBank: false,
    visibleBankTba: false,
    visibleSuccess: false,
    visibleTransfer: false,
    toggleVisibleRWA: () => {
        set((state) => ({visibleRWA: !state.visibleRWA}))
    },
    toggleVisibleBorrow:  () => {
        set((state) => ({visibleBorrow: !state.visibleBorrow}))
    },
    toggleVisibleTBA:  () => {
        set((state) => ({visibleTBA: !state.visibleTBA}))
    },
    toggleVisibleBank:  () => {
        set((state) => ({visibleBank: !state.visibleBank}))
    },
    toggleVisibleBankTba:  () => {
        set((state) => ({visibleBankTba: !state.visibleBankTba}))
    },
    toggleVisibleSuccess:  () => {
        set((state) => ({visibleSuccess: !state.visibleSuccess}))
    },
    toggleVisibleTranfer:  () => {
        set((state) => ({visibleTransfer: !state.visibleTransfer}))
    },
}))


export default useModalStore;