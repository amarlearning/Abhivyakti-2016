var dntrigger = document.getElementById('dntrigger');

dntrigger.addEventListener('click', function(e) {
	e.preventDefault();

	if(!window.Notification)
	{
		alert("Sorry, Notification Not supported in this Browser!");
	}
	else
	{
		if(Notification.permission === 'default')
		{
			Notification.requestPermission(function(p) {
				if(p === 'denied')
					alert('You have denied Notification from Team Abhivyakti');
				else
				{
					notify = new Notification('Notifications!', {
						body: 'Abhivyakti 2016 Theme Released!! - "The 5th Season"',
						icon: '/img/icon/images.png'
					});
				}
			});
		}
		else
		{
			notify = new Notification('Notifications!', {
				body: 'Abhivyakti 2016 Theme Released!! - "The 5th Season"',
				icon: '/img/icon/images.png'
			});
		}
	}
});
