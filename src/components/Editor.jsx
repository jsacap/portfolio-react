import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor({ value, onChange }) {
  const editorStyle = {
    maxHeight: '400px', 
    maxWidth: '1500px', 
    overflow: 'auto', 
  };

  return (
    <div style={editorStyle}>
      <ReactQuill
        value={value}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        formats={[
          'header',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet',
          'link', 'image',
        ]}
        onChange={onChange}
      />
    </div>
  );
}
