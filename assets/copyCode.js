var codeBlocks = document.querySelectorAll('pre.highlight ');

// print codeBlocks with hello world
console.log('hello world 0');

codeBlocks.forEach(function (codeBlock) {

		var copyButton = document.createElement('button');
		copyButton.className = 'copy';
		copyButton.type = 'button';
		copyButton.ariaLabel = 'Copy code to clipboard';
		copyButton.innerText = 'COPY';

		codeBlock.append(copyButton);
		console.log(codeBlock.innerHTML);

		copyButton.addEventListener('click', function () {
			var code = codeBlock.querySelector('code').innerText.trim();
			window.navigator.clipboard.writeText(code);

			copyButton.innerText = 'COPIED';
			var fourSeconds = 4000;

			setTimeout(function () {
				copyButton.innerText = 'COPY';
			}, fourSeconds);
		});
	}
);