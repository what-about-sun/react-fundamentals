using HousesApi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddSingleton<HouseRepository>();
builder.Services.AddSingleton<BidRepository>();

var app = builder.Build();
app.UseCors(o => o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGet("/house", (HouseRepository repo) => repo.GetAll());
app.MapGet("/bid/{houseId}", (BidRepository repo, int houseId) => repo.GetBids(houseId));
app.MapPost("/bid/{houseId}", (BidRepository repo, Bid bid, int houseId) =>
{
    bid.HouseId = houseId;
    repo.Add(bid);
});
app.Run();
