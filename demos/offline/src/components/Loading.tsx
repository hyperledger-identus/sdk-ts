export default function Loading() {
    return <div className={`fixed inset-0 flex justify-center items-center h-screen bg-background-light dark:bg-background-dark backdrop-blur-sm z-50`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-button-primary-light dark:border-button-primary-dark bg-transparent"></div>
    </div>
}