function handlingBackendData(eventsNames, eventsDates) {
  const allInputs = document.querySelectorAll('input[type="hidden"]');

  allInputs.forEach((input) => {
    if (input.id.includes('event-name')) {
      const eventName = input.value;
      eventsNames.push(eventName);
    }
    if (input.id.includes('target-date')) {
      const eventDate = input.value;
      eventsDates.push(eventDate);
    }
  });
}

export { handlingBackendData };
