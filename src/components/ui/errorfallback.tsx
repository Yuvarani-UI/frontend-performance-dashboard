type ErrorFallbackProps = {
  message: string;
  onRetry?: () => void;
};

export default function ErrorFallback({
  message,
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6">
      <p className="text-red-700">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
        >
          Retry
        </button>
      )}
    </div>
  );
}