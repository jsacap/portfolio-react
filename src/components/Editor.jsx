import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../components/Newsletter/Editor.css'; 

export default function Editor({ value, onChange }) {
  return (
    <div className="editor-container">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={Editor.modules}
        formats={Editor.formats}
      />
    </div>
  );
}

// Add modules and formats as static properties
Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
  ],
};

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',
  'link', 'image', 'video',
  'clean', 'code-block',
];
