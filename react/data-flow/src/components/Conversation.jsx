function Conversation({ chatState }) {
  return (
    <div className="text-center text-gray-500">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conversation with {chatState.displayConversation.with}</h2>
      <p>This is the conversation view.</p>
    </div>
  );
}
export default Conversation