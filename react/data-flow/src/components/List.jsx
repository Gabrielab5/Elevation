import Contact from './Contact'

function List({ chatState, setChatState }) {
  return (
    <div className="text-center text-gray-500">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacts</h2>
      <div className="flex flex-col space-y-4">
        {chatState.conversations.map((conversation, index) => (
          <Contact
            key={index}
            onClick={() => setChatState(prevState => ({ ...prevState, displayConversation: conversation }))}
            className="px-4 py-3 bg-white text-gray-800 font-medium rounded-xl shadow-md hover:bg-gray-200 transition-colors duration-200"
            name = {conversation.with}
          />
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-400">Click a contact to view the conversation.</p>
    </div>
  );
}
export default List