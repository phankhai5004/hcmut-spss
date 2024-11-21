export default function PDFPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      {/* Document Preview */}
      <div className="h-full w-full">
        <object
          data="https://www.geneseo.edu/~aguilar/public/assets/courses/310/page-rank-basic.pdf"
          type="application/pdf"
          className="h-full w-full"
        >
          <p className="text-center text-gray-600">
            Cannot load PDF. Please click{' '}
            <a
              href="https://www.geneseo.edu/~aguilar/public/assets/courses/310/page-rank-basic.pdf"
              className="text-blue-500 underline hover:text-blue-700"
            >
              here
            </a>{' '}
            to view it.
          </p>
        </object>
      </div>
    </div>
  );
}
