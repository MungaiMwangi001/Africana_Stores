import React, { useState } from 'react';

const placeholderReviews = [
  { name: 'Jane Doe', rating: 5, comment: 'Beautiful product!' },
  { name: 'John Smith', rating: 4, comment: 'Very well made.' },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState(placeholderReviews);
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, { ...form, rating: Number(form.rating) }]);
    setForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <section className="mt-8">
      <h2 className="text-xl font-heading font-semibold mb-4 text-primary-brown">Customer Reviews</h2>
      <ul className="mb-6 space-y-2">
        {reviews.map((r, i) => (
          <li key={i} className="bg-background-light p-4 rounded shadow">
            <div className="font-bold text-primary-ochre">{r.name}</div>
            <div className="text-yellow-500">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
            <div className="text-primary-brown">{r.comment}</div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="number"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          min={1}
          max={5}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Your review"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-primary-ochre text-white rounded font-semibold hover:bg-primary-brown transition">Submit Review</button>
      </form>
    </section>
  );
} 