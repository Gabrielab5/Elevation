import Contact from './Contact'

function List({ conversations, onSelectContact }) {
  return (
    <div className="text-center text-gray-500">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacts</h2>
      <div className="flex flex-col space-y-4">
        {conversations.map((conversation, index) => (
          <Contact
            key={index}
            name = {conversation.with}
            onSelect={() => onSelectContact(conversation.with)}
          />
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-400">Click a contact to view the conversation.</p>
    </div>
  );
}
export default List