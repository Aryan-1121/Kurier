import Conversation from "../model/conversation.js";
import Message from "../model/message.js";

export const sendMessage = async (req, res) => {

	try {
		const { message } = req.body;           // getting message from body 
		const { id: receiverId } = req.params;          // getting id  from params 
		const senderId = req.user._id;					// getting it from previous middleware 

		// 1st- find conversation b/w these 2 user
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		// if no conversation (sending message for 1st time) then create a conversatin with default empty message[]
		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		// messageId will be created by mongoDB and that messageId will be pushed into conversationSchema's Message array 
		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		// if message created sucessfully then push the messageid in conversation model 
		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// // await conversation.save();
		// // await newMessage.save();

		// // this will run in parallel
		// await Promise.all([conversation.save(), newMessage.save()]);

		// // SOCKET IO FUNCTIONALITY WILL GO HERE
		// const receiverSocketId = getReceiverSocketId(receiverId);
		// if (receiverSocketId) {
		// 	// io.to(<socket_id>).emit() used to send events to specific client
		// 	io.to(receiverSocketId).emit("newMessage", newMessage);
		// }

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};





