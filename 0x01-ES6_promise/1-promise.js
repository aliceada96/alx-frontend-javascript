export default function getFullResponseFromAP(success) {
  if (success) return Promise.resolve({ status: 200, body: 'Success' });
  return Promise.reject(new Error('The fake API is not working currently'));
}
