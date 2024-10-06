import { useState } from 'react';

const ResumeForm = ({ setResumeData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    contact: '',
    skills: '',
    itemName:'',
    itemDetail:'',
    unitPrice:'',
    quantity:'',
    total:'',
    remark:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Client Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Address</label>
        <textarea name="education" value={formData.education} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact</label>
        <input type="number" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>
      
      <div>
        <label>Item Name</label>
        <input type='text' name="itemName" value={formData.itemName} onChange={handleChange} required />
      </div>
      <div>
        <label>Item Detail</label>
        <textarea name="itemDetail" value={formData.itemDetail} onChange={handleChange} required />
      </div>
      <div>
        <label>Unit Price</label>
        <input type='text' name="unitPrice" value={formData.unitPrice} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity</label>
        <input type='number' name="quantity" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Total Amount</label>
        <input type='number' name="total" value={formData.total} onChange={handleChange} required />
      </div>
      <div>
        <label>Remark</label>
        <input type='text' name="remark" value={formData.remark} onChange={handleChange} required />
      </div>
      
      <button type="submit">Create Quotation</button>
    </form>
  );
};

export default ResumeForm;
