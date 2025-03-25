export default function Loading() {
    return <div className={`fixed inset-0 flex justify-center items-center h-screen bg-gray-800/75 backdrop-blur-sm z-50`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 bg-transparent"></div>
    </div>
}