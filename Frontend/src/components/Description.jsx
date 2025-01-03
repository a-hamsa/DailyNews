import React from 'react';

const Description = () => {
    return (
        <div className="p-8 rounded-lg max-w-4xl mx-auto mt-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">Welcome to DailyNews</h1>
            <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
                <p>
                    Stay informed with <span className="font-semibold text-blue-600">DailyNews</span>, your go-to source for the latest and most reliable news from around the world. Our dedicated team of journalists works around the clock to bring you breaking news, in-depth analysis, and insightful commentary on the stories that matter most.
                </p>
                <p>
                    Whether you're interested in politics, technology, sports, entertainment, or global events, <span className="font-semibold text-blue-600">DailyNews</span> has you covered. Our user-friendly platform ensures you can easily navigate through various categories and find the news that interests you the most.
                </p>
                <p>
                    Join our community of informed readers and never miss a beat. With <span className="font-semibold text-blue-600">DailyNews</span>, you're always in the know. Stay curious, stay updated, and stay ahead with <span className="font-semibold text-blue-600">DailyNews</span>.
                </p>
            </div>
        </div>
    );
};

export default Description;