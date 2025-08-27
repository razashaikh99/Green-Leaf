import React, { useState } from "react";

export default function ReminderForm({ plant, onSave, onCancel }) {
  const [reminderText, setReminderText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reminderText || !date) {
      alert("Please enter reminder details");
      return;
    }

    onSave({
      id: Date.now(),
      plantId: plant.id,
      text: reminderText,
      date,
    });

    setReminderText("");
    setDate("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Set Reminder for {plant.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Reminder Text */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Reminder Note
            </label>
            <input
              type="text"
              placeholder="e.g. Water every Monday"
              value={reminderText}
              onChange={(e) => setReminderText(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Reminder Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Reminder Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Save Reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
