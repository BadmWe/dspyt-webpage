const insertToTextArea = (intsertString) => {
    const textarea = document.querySelector("textarea");
    if (!textarea) {
      return null;
    }
  
    let sentence = textarea.value;
    const len = sentence.length;
    const pos = textarea.selectionStart;
    const end = textarea.selectionEnd;
  
    const front = sentence.slice(0, pos);
    const back = sentence.slice(pos, len);
  
    sentence = front + intsertString + back;
  
    textarea.value = sentence;
    textarea.selectionEnd = end + intsertString.length;
  
    return sentence;
  };

export default insertToTextArea;
