export const VALIDATE = {
  required: { required: 'กรุณาระบุข้อมูลให้ถูกต้อง' },
  'minLength:8': {
    minLength: { value: 8, message: 'ต้องมีอย่างน้อย 8 ตัวอักษร' },
  },
  email: {
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'กรุณาระบุอีเมลให้ถูกต้อง',
    },
  },
};
