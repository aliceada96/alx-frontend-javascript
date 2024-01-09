export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  const studentIds = studentsList.map((student) => student.id);
  return studentIds;
}
