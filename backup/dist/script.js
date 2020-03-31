DecoupledEditor
    .create( document.querySelector( '.document-editor__editable' ), 
           {
        cloudServices: {
            tokenUrl: '',
            uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
        }
    }
           )
    .then( editor => {
        const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

        toolbarContainer.appendChild( editor.ui.view.toolbar.element );

        window.editor = editor;
    } )
    .catch( err => {
        console.error( err );
    } );