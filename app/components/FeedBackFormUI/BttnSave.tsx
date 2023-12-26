export function BttnSave({ isEdit, saveEditHandler, saveHandler }: any) {
  return (
    <>
      {isEdit ? (
        <button
          type="submit"
          className={`bg-[#ad1fea] p-3 rounded-lg text-white font-bold `}
          onClick={saveEditHandler}
        >
          Save Change
        </button>
      ) : (
        <button
          type="submit"
          className="bg-[#ad1fea] p-3 rounded-lg text-white font-bold"
          onClick={saveHandler}
        >
          Save
        </button>
      )}
    </>
  );
}
