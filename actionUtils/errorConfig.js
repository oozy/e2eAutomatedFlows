export const errorsFormat = (dataHook, error) => {
	return `Element with dataHook: '${dataHook}' sholhde be '${error?.expected ||
		''}' but got '${error?.actual || ''}'`;
};
