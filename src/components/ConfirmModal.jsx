function ConfirmModal({isOpen, onConfirm, onCancel}) {

  if (!isOpen) return null;
    return (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 flex justify-center items-center">
            {/* Modal */}
            <div className="bg-white p-6 rounded-md shadow-lg max-w-sm">
              <h2 className="text-xl font-bold mb-2 text-center">Delete Task?</h2>
              <p className="mb-4">This action cannot be reversed.</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={onConfirm}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md transition hover:bg-blue-400"
                >
                  Confirm
                </button>
                <button
                  onClick={onCancel}
                  className="px-4 py-2 bg-gray-300 rounded-md transition hover:bg-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default ConfirmModal;